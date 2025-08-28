# assignment05SolutionFH

## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### Response:

    All of these are DOM manipulation functions.
    a) getElementById(id) selects a single element based on its unique id attribute.
    b) getElementsByClassName(....) selects all elements that have a specific class name.
    c) querySelectorAll(...) selects all elements that match a specified CSS selector.
    d) querySelector(....) selects the first element that matches a specified CSS selector.

## How do you create and insert a new element into the DOM?

### Response:

    Creating and inserting a new element into the Document Object Model (DOM) in JavaScript involves two main steps: a) creating the element and setting it's properties and then b) attaching it to an existing element in the document.

        Example:
        let newLI = document.createElement("li"); // creating an element
        newLI.innerHTML = "New Element"
        const parentElement = document.getElementById("parentUL");
        parentElement.appendChild(newLI);

## What is Event Bubbling and how does it work?

### Response:

    Event bubbling is a JavaScript mechanism in web browsers where an event triggered on a specific HTML element (the target) propagates upwards through its ancestor elements in the Document Object Model (DOM) tree, all the way to the document root, like a ripple in water.

    How Event Bubbling Works:

        1. Event Trigger:
        A user action (like a click) occurs on a specific element, which becomes the "target" element.
        2. Target Phase:
        The event first triggers on the target element itself.
        3. Bubbling Phase:
        After the target phase, the event "bubbles up" the DOM tree. The event travels from the target element to its immediate parent. It then moves up to the parent's parent (the grandparent), and so on. This continues until the event reaches the document's root element, such as the window object.

## What is Event Delegation in JavaScript? Why is it useful?

### Response:

    Event delegation in JavaScript is a technique where a single event listener is attached to a common ancestor element to manage events for multiple descendant elements. Instead of attaching individual event listeners to each child element, the parent element "delegates" the handling of events to its children based on event bubbling.

    Event delegation is useful due to many reasons, like:
        a) Improved Performance and Reduced Memory Usage
        b) Simplified Event Handling for Dynamic Content
        c) Cleaner and More Maintainable Code
        d) Efficient Management of Large Lists or Tables

## What is the difference between preventDefault() and stopPropagation() methods?

### Response:

    The preventDefault() and stopPropagation() methods in JavaScript event handling serve distinct purposes related to how events behave in the Document Object Model (DOM).

    event.preventDefault():
        This method prevents the default action associated with a specific event from occurring.
    event.stopPropagation():
        This method prevents the event from propagating further up or down the DOM tree during the bubbling or capturing phases.

    preventDefault(): addresses the default behavior of an element.
    stopPropagation(): addresses the propagation of an event through the DOM hierarchy.
