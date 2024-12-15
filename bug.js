```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: Setting count directly
    count = count + 1; 
  }, []);

  return <div>Count: {count}</div>;
}
```