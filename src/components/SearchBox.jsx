import React, { useState, useEffect, useRef } from 'react';
import "./SearchBox.css";

// Props:
// - items: array of objects with at least { id, name }
// - minChars: number of characters to start searching (default 3)
// - placeholder: input placeholder
// - onSelect: callback when user selects an item


function SearchBox({ items = [], minChars = 3, placeholder = 'Inserte palabra clave', onSelect }) {
const [query, setQuery] = useState('');
const [suggestions, setSuggestions] = useState([]);
const [open, setOpen] = useState(false);
const [activeIndex, setActiveIndex] = useState(-1);
const containerRef = useRef(null);


// Filter using startsWith (case-insensitive)
useEffect(() => {
const q = query.trim().toLowerCase();
if (q.length >= minChars) {
const matched = items.filter(item => item.name.toLowerCase().includes(q));
setSuggestions(matched);
setOpen(matched.length > 0);
} else {
setSuggestions([]);
setOpen(false);
}
setActiveIndex(-1);
}, [query, items, minChars]);


// Close when clicking outside
useEffect(() => {
function onDocClick(e) {
if (containerRef.current && !containerRef.current.contains(e.target)) {
setOpen(false);
}
}
document.addEventListener('click', onDocClick);
return () => document.removeEventListener('click', onDocClick);
}, []);


function handleKeyDown(e) {
if (!open) return;
if (e.key === 'ArrowDown') {
e.preventDefault();
setActiveIndex(i => (i + 1) % suggestions.length);
} else if (e.key === 'ArrowUp') {
e.preventDefault();
setActiveIndex(i => (i <= 0 ? suggestions.length - 1 : i - 1));
} else if (e.key === 'Enter') {
e.preventDefault();
if (activeIndex >= 0 && suggestions[activeIndex]) {
selectItem(suggestions[activeIndex]);
}
} else if (e.key === 'Escape') {
setOpen(false);
}
}


function selectItem(item) {
setQuery(item.name);
setOpen(false);
if (onSelect) onSelect(item);

}
return (
        <div className="search-box" ref={containerRef}>
<input
value={query}
onChange={e => setQuery(e.target.value)}
onKeyDown={handleKeyDown}
placeholder={placeholder}
aria-autocomplete="list"
aria-expanded={open}
aria-controls="search-suggestions"
/>



{open && (
<ul id="search-suggestions" className="suggestions" role="listbox">
{suggestions.map((s, idx) => (
<li
key={s.id}
className={idx === activeIndex ? 'suggestion active' : 'suggestion'}
onMouseEnter={() => setActiveIndex(idx)}
onMouseDown={(e) => { e.preventDefault(); selectItem(s); }}
role="option"
aria-selected={idx === activeIndex}
>
{s.name}
</li>
))}
</ul>
)}
</div>
);


}


export default SearchBox