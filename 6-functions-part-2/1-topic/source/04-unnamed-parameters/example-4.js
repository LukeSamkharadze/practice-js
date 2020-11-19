function func(...args) {
    console.log(args.length === arguments.length);
    console.log(args[0] === arguments[0]);
    console.log(args[1] === arguments[1]);
    console.log(Array.isArray(args) === Array.isArray(arguments));
}

func(1, 2);