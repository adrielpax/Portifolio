import {gql} from 'apollo-server-express';

const rootTypeDefs = gql`
    type Query {
        aboutMe:String
    }
`;

const rootResolvers = {
    Query:{
        aboutMe:()=>"Olá, meu nome é Adriel e tenho 19 anos. Estou cursando Análise e Desenvolvimento de Sistemas e buscando um estágio na área de tecnologia da informação. Meu objetivo a longo prazo é me tornar um especialista no ecossistema JavaScript e tenho um grande interesse em aprender e aplicar as novas tecnologias nesse campo. Tenho habilidades sólidas em tecnologias como Node.js, React.js, React Native, MongoDB, Express, Tailwind, TypeScript, Next.js, GraphQL, API Rest e tenho fluência no inglês. Além disso, sou uma pessoa apaixonada por aprendizado rápido, comunicação eficiente, criatividade e design, e tenho conhecimentos básicos em contabilidade e mercado financeiro. Meu sonho é um dia desenvolver meu próprio negócio na área de tecnologia e criar soluções incríveis que possam transformar a vida das pessoas. Estou animado para começar essa jornada e contribuir para o crescimento de uma empresa.",
    }
}

export const typeDefs = [rootTypeDefs];
export const resolvers = [rootResolvers];