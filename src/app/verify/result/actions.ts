"use server";

import { verifyContextCheck, VerifyContextCheckInput, VerifyContextCheckOutput } from '@/ai/flows/verifier-context-check';

export async function performContextCheck(input: VerifyContextCheckInput): Promise<VerifyContextCheckOutput> {
  try {
    const result = await verifyContextCheck(input);
    return result;
  } catch (error) {
    console.error("Error in AI context check:", error);
    return {
      success: false,
      message: "An unexpected error occurred while verifying the context. Please try again.",
    };
  }
}
