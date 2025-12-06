'use server';

/**
 * @fileOverview A flow for verifying the context provided by the user against mock data.
 *
 * - verifyContextCheck - A function that handles the context verification process.
 * - VerifyContextCheckInput - The input type for the verifyContextCheck function.
 * - VerifyContextCheckOutput - The return type for the verifyContextCheck function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VerifyContextCheckInputSchema = z.object({
  context: z.string().describe('The context provided by the user for verification.'),
  relationship: z.string().describe('The expected relationship of the user.'),
  currentLocation: z.string().describe('The expected current location of the user.'),
  occupation: z.string().describe('The expected occupation of the user.'),
});
export type VerifyContextCheckInput = z.infer<typeof VerifyContextCheckInputSchema>;

const VerifyContextCheckOutputSchema = z.object({
  success: z.boolean().describe('Whether the context matches the expected data.'),
  message: z.string().describe('A message indicating the result of the verification.'),
});
export type VerifyContextCheckOutput = z.infer<typeof VerifyContextCheckOutputSchema>;

export async function verifyContextCheck(input: VerifyContextCheckInput): Promise<VerifyContextCheckOutput> {
  return verifyContextCheckFlow(input);
}

const verifyContextCheckPrompt = ai.definePrompt({
  name: 'verifyContextCheckPrompt',
  input: {schema: VerifyContextCheckInputSchema},
  output: {schema: VerifyContextCheckOutputSchema},
  prompt: `You are an AI assistant that verifies context provided by a user against trusted data.\n\nContext: {{{context}}}\nExpected Relationship: {{{relationship}}}\nExpected Location: {{{currentLocation}}}\nExpected Occupation: {{{occupation}}}\n\nDetermine if the context matches the expected data. Return a success boolean and a message indicating the result of the verification. Do not reveal the raw data. Return the result as a JSON object.`, 
});

const verifyContextCheckFlow = ai.defineFlow(
  {
    name: 'verifyContextCheckFlow',
    inputSchema: VerifyContextCheckInputSchema,
    outputSchema: VerifyContextCheckOutputSchema,
  },
  async input => {
    const {output} = await verifyContextCheckPrompt(input);
    return output!;
  }
);
