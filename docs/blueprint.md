# **App Name**: TrustBridge

## Core Features:

- Dual-Mode Landing Page: Landing page with buttons for 'Verify Someone' and 'Prove Identity'. Includes a demo user switcher to toggle between User A (Grandma) and User B (Ali).
- Verifier Flow - Challenge Generation: Generates a random 6-digit code for the user to share.
- Verifier Flow - Waiting Room: Displays a 'Waiting for signature...' spinner while waiting for the other user to sign the code.
- Verifier Flow - AI Context Check: Takes user input about the context and validates the claims made against mock data.  Returns a success or failure result without revealing User B's raw data. Uses a tool incorporating keywords for the match.
- Prover Flow - Enter Challenge: Allows the user to enter the 6-digit code provided by the verifier using a keypad.
- Prover Flow - Liveness Check Simulation: Simulates a liveness check by showing a camera feed placeholder and a 'Scan Face to Sign' button. Shows 'Scanning...' animation followed by 'Face Matched'.
- Identity Signature: Simulates the signing of the challenge phrase upon matching a live face.

## Style Guidelines:

- Primary color: Deep slate (#272A31) for a serious, secure feel.
- Background color: Very light slate (#F0F1F2), nearly white, to provide a neutral backdrop that emphasizes content without being distracting.
- Accent color: Soft blue (#518BAB) to provide visual interest and a sense of calm security; will contrast nicely with the desaturated background, and has enough presence to work well on top of the dark primary.
- Font: 'Inter' (sans-serif) for a modern and legible design, ideal for accessibility.
- Use simple, clear icons to represent actions and states, ensuring they are easily understandable for elderly users.
- Prioritize a clean, mobile-first layout with large, easily tappable buttons and a clear information hierarchy.
- Use subtle animations for loading states and transitions to provide feedback without being distracting.