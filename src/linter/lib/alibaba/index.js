const utils=require("../utils/utils"),wxmlLineRules=[],wxmlFileRules=[],wxssFileRules=[],wxssLineRules=[],scriptLineRules=[],scriptFileRules=[(e,l)=>{const s=/['"][\w\/.]+['"]/,i=e.match(/require\(([^)]+)\)/);if(i&&!s.test(i[1])){return{line:utils.calcLine(e,i[0]),path:l,source:i[0],rule:"`require`，参数只能是字符串直接量，不能是变量（如：`var path = '/a/b/c'; require(path);`）"}}return null},(e,l)=>{const s=/triggerEvent\(['"]/,i=e.match(/triggerEvent\(([^)]+)\)/);if(i&&!s.test(i[0])){return{line:utils.calcLine(e,i[0]),path:l,source:i[0],rule:"triggerEvent(name, data)`，`name`目前只支持字符串直接量，不支持变量"}}return null}];module.exports={wxmlLineRules:wxmlLineRules,wxmlFileRules:wxmlFileRules,wxssLineRules:wxssLineRules,wxssFileRules:wxssFileRules,scriptLineRules:scriptLineRules,scriptFileRules:scriptFileRules};