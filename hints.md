**1. Manage Drawing State**

- Use React’s `useState` to maintain two separate arrays:
  - `circles`: Stores each drawn circle’s position (`{ x, y }`).
  - `redoStack`: Temporarily holds undone circles for redo capability.
- Always update the state **immutably** to ensure React re-renders correctly.

```js
const [circles, setCircles] = useState([]);
const [redoStack, setRedoStack] = useState([]);
```

**2. Draw Circles on Click**

- Make a box (`600x400px`, with border) to draw inside.
- Use `ref` to get the box's position on the screen.
- When user clicks, get mouse position **relative** to the box.

```js
const rect = drawingRef.current.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
```
- Add this point to `circles`
- Clear `redoStack` after drawing

**3. Undo Button**

- Add a button with class: `.undo-btn`
- On click:
  - Remove last circle from `circles`
  - Add it to `redoStack`

**4. Redo Button**

- Add a button with class: `.redo-btn`
- On click:
  - Remove last circle from `redoStack`
  - Add it back to `circles`

**5. Undo/Redo Multiple Times**

- Let users click undo/redo many times — not just once.
- Each action should move circles between the two arrays.

**6. Keyboard Shortcuts (Optional)**

- Listen to `keydown` events using `useEffect`.
- Support:
  - `Ctrl+Z` → Undo
  - `Ctrl+Y` → Redo

**7. Render Circles with Styles**

- Each circle should be absolutely positioned using `{ left, top }`.
- Give circles a class of `.circle` and style like below:

```css
.circle {
  width: 20px;
  height: 20px;
  background-color: blue;
  border-radius: 50%;
  position: absolute;
}

**8. Testing Notes**

Use these class names or attributes for tests to target elements:
- Drawing area: `data-testid="drawing-area"`
- Circle element: `class="circle"`
- Undo button: `class="undo-btn"`
- Redo button: `class="redo-btn"`