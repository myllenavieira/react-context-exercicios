import { Box, Center, Heading, Text, Stack, Button } from '@chakra-ui/react';
import { useState } from 'react';


export default function ProductSimple({ id, name, selection, usersList }) {
    console.log(usersList);
    const [selectCard, setSelectCard] = useState(false)

    const mudaEstado = () => {
        setSelectCard(!selectCard)
    }
    return (
        <Center py={12}>
            <Box
                border={selectCard? "2px solid red": "2px solid transparent"}
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={'white'}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                <Stack pt={10} align={'center'}>
                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                        {id}
                    </Text>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        {name}
                    </Heading>
                    <Button onClick={mudaEstado}>{!selectCard? "Selecionar" : "Selecionado "}</Button>
                </Stack>
            </Box>
        </Center>
    );
}