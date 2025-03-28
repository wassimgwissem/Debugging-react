# PLAYER CARDS APP

## ABOUT
- Displays interactive player cards
- Toggle visibility of player details
- Shows how long each player card has been visible

## MAIN FEATURES
* Player Information:
  - Photo
  - Name
  - Team
  - Nationality
  - Age

* Interactive Elements:
  - Show/Hide button
  - Visibility timer
  - Auto-reset timer when hidden

## HOW TO USE
1. Cards load automatically
2. Click "Show Player" to view details
3. Click "Hide Player" to hide details
4. Timer shows visibility duration

## DEBUGGING PROCESS
After inspecting the component "Player" state in React DevTools , i noticed "showChild" was set to null instead of a boolean value , which occured an issue in the conditional rendering.So, I fixed it by changing the code to always use boolean values with setShowChild(!showChild).Now the toggle works correctly.
