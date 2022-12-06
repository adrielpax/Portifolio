
/** 
/*type Texts = {
    aboutMe:string
    heroSection:string
}

export const getStaticProps: GetStaticProps = async (context) => {
    
    const res = await fetch(`../messages/${context.locale}.json`);
    const messages: Texts[] = await res.json();

    return{
        props:{
            messages,
        }
    }
}

//{messages}:InferGetStaticPropsType<typeof getStaticProps>
//const t = useTranslations('description');
//const {locale} = useRouter()
*/

