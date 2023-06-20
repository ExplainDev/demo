const hello = "Hello World!";

function sayHello() {
  console.log(hello);
}

function sayHelloTo(name: string) {
  console.log(`${hello} ${name}`);
}

sayHello();
