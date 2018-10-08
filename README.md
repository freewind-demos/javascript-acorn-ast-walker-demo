JavaScript "acorn" Tokenizer Demo
=================================

使用acorn来获取JavaScript的token。

未使用插件的情况下只能解析旧语法，另外不知道为什么comment没有取出来。

```
npm install
npm run demo
```

It will print:

```
function
hello
(
)
{
console
.
log
(
hello, world!
)
;
false
}
hello
(
)
;
eof
```
