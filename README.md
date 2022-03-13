const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
setValue(e.target.value);
};

Мы оборачиваем event, для кроссбраузерности, чтоб дял него был свой айпиай


-----------------------------------


const ref = useRef<HTMLInputElement>(null);


const keyPressHandler = (e: KeyboardEvent) => {
if (e.key === "Enter") {
console.log(ref.current!.value);
}
};


-------------------------------------


declare var confirm: (placeholder: string) => boolean
ts не знает что такое confirm, эта строчка говрит что функция точно есть
   const confirmDelete = confirm('You sure delete task')


----------------------------------------


