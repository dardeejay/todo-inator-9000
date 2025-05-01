import { NextRequest, NextResponse } from "next/server";
import { ChatOpenAI } from "@langchain/openai";
import { taskSchema } from "@/types/tasks";
import { PromptTemplate } from '@langchain/core/prompts';

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const { text } = await req.json();

  try {
    const model = new ChatOpenAI({
      model: "gpt-4o-mini",
      temperature: 0,
    });

    const prompt = new PromptTemplate({
      template: "Extract tasks from the following text: {input}",
      inputVariables: ["input"],
    });

    const structuredModel = model.withStructuredOutput(taskSchema);

    const formattedPrompt = await prompt.format({ input: text });

    const response = await structuredModel.invoke(formattedPrompt);

    if (response) {
      return NextResponse.json(
        {
          data: response,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      { status: 500 }
    );
  }
}
