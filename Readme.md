This is WIP project to taste and test the Feature-Sliced Design Architectural methodology

## Links

https://feature-sliced.design/

## Problems log

Layout - where does it belong to

https://feature-sliced.design/docs/guides/examples/page-layout

Feature (Theme toogle) needs to import Theme which at the first glance belongs to a higher order layer (or is it actually also a feature? ) Anyway this breaks the rule of layer import.
Same shit with useTheme hook, which can be used by other lower level entities, so do those in fact belong to shared layer?

it seems this problem is still being discussed by the framework authors
https://www.youtube.com/watch?v=b_nBvHWqxP8&t=133s&ab_channel=Feature-SlicedDesign
