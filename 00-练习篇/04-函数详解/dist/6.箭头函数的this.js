let testObj = {
    a: 10,
    fn(x) {
        return () => {
            this; //该this指向普通函数this标注的东西，比如在这里指向的是window
        };
    }
};
