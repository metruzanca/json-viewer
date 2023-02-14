# json-viewer

Project made on a whim for to see how hard it would be considering json is a recursive tree structure.

I expect making an interative version of the `Renderer` would be quite the challenge. JSON doesn't get THAT nested for this to be an issue.

Taking advantage of html `details` & `summary` tags makes this actually really performant, with just the textarea getting changed causing updates.
