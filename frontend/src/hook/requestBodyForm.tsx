import * as Yup from 'yup';

function requestBodyForm(){
    
    const nameRegex = /^[a-z A-Z]+$/;

    const schemaValidation = Yup.object().shape({
        name:Yup.string()
            .min(3,'o nome deve ter mais que 3 caracteres')
            .matches(nameRegex,'esse formato nao é valido')
            .required('o seu nome é nescessario'),
        email:Yup 
            .string()
            .email('o email deve ser valido')
            .required('o email é invalido'),
        message:Yup
        .string()
        .required('não deixe de mandar sua mensagem'),
        date:Yup
        .string()
        .default(() => new Date().toLocaleDateString()) ,
    })

    const onSubmitPostApi = async (v:any) => {

        const valid = await schemaValidation.validate(v);

        if(valid){
            alert('Sua mensagem foi enviada com suscesso')
            const response = await fetch('api/contactFormApi',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(v,null,4)  
            })
            const content = await response.json()
        }
        
    }

    return {schemaValidation,onSubmitPostApi}
}

export default requestBodyForm