> **Note:**  
> - The description should be clear and easy to understand.  
> - If any `test-id` or class names are used in the test cases, make sure to mention them in the description.

You have to build a simple **Circle Drawer** React component where users can draw circles by clicking anywhere inside a drawing area. The component should also provide **Undo** and **Redo** functionalities to remove or re-add circles in the order they were added.


### Things To Do

1. **State Management**  
   - Use the useState hook to manage the following states:
     - circles: An array to store the drawn circles.
     - redoStack: An array to store circles that have been undone.
   
   - Ensure that the state updates are handled immutably to maintain predictable behavior (Do not update the state directly)

2. **Draw Circles on Click**  
   - Whenever the user clicks inside the drawing area, a new circle should appear exactly at the clicked position.

3. **Undo Functionality**  
   - Implement an **Undo** button that removes the most recently drawn circle.

4. **Redo Functionality**  
   - Implement a **Redo** button that re-adds the last undone circle.

5. **Multiple Undo/Redo Steps**  
   - Allow users to undo and redo multiple times, moving backward and forward through their drawing actions.

6. **Keyboard Shortcuts (Optional but Recommended)**  
   - Support Ctrl+Z to Undo and Ctrl+Y to Redo.

7. **Instant Visual Feedback**  
   - Circles should appear and disappear immediately when drawing, undoing, or redoing.


###  Important Note

- The drawing area should have a fixed size (e.g., 600x400 px) with a visible border.
- Circles can be simple colored dots (e.g., 20px diameter blue circles).
- When a new circle is drawn after an Undo, the Redo stack should clear.
- Use descriptive class names like .circle, .undo-btn, .redo-btn where applicable.
- Make sure mouse click coordinates are calculated relative to the drawing area container.

