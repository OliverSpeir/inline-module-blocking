# Disambiguating module scripts

https://html.spec.whatwg.org/multipage/scripting.html#attr-script-type

> Setting the attribute to an ASCII case-insensitive match for "module" means that the script is a JavaScript module script, to be interpreted according to the JavaScript Module top-level production. Module scripts are not affected by the defer attribute, but are affected by the async attribute (regardless of the state of the src attribute).

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#defer

> Warning: This attribute must not be used if the src attribute is absent (i.e. for inline scripts), in this case it would have no effect.
>
> The defer attribute has no effect on module scripts — they defer by default.
