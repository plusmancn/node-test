try{
    throw new Error('错误抛出测试');
}catch(e){
    var fs = require('fs');
    fs.writeFileSync('./push_error_log.log',new Date().toLocaleString() + '\n' + e.stack+ '\n\n',{flag:'a+'});
}