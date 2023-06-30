const traceProperty = (object,property)=>{
    const descriptor = Object.getOwnPropertyDescriptor(object, property)
    
    Object.defineProperty(object, property, {
        // get() {
        //     console.trace(`${property} requested`);
        //     descriptor.get()
        // },
        set(newValue) {
            console.trace('%cMQTT', 'background-color: green', `setting ${property} to `, newValue);
            descriptor.set.call(object, newValue)
        },
    })
};

