export function formValidation(enigmaData){
    let errMessage=[]
    let pattern=/^[a-zA-Z0-9]*$/
    if( !enigmaData.enigma.match(pattern)){
      errMessage.push('Моля, за името на станцията използвайте само латински букви и цифри ')
    }
    if(enigmaData.enigma==""){
      errMessage.push('Името на станцията е задължително!')
    }
    if(enigmaData.content==""){
      errMessage.push('Моля, въведете поне част от съобщението!')
    }
    if(enigmaData.freq=="" || enigmaData.freq<3000 || enigmaData.freq>30000){
      errMessage.push('Честотата трябва да е в обхвата на късите вълни!')
    }
    if(enigmaData.date==""){
      errMessage.push('Датата е задължителна!')
    }
    if(enigmaData.time==""){
      errMessage.push('Времето е задължителнo!')
    }

    if(errMessage.length>0){
      let error=errMessage.join('\n')
      //alert(erro)
      return error
    }
    return
}