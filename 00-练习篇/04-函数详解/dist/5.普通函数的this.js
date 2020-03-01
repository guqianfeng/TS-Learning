let obj = {
    a: 2,
    fn(a) {
        // (<T> this).a;
        console.log(this.a);
    }
};
obj.fn(10);
