import { Button, chakra, Divider, VisuallyHidden, Spinner, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import axios from "axios";
import { useRouter as router1 } from 'next/navigation';

import styles from "@/styles/Home.module.css"
import CardRow from "./components/direction";

function StoryGenerator() {

    const [data, setData] = useState([]);
    const [title, setTitle] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { id } = router.query;
    const { push } = router1();

    let apiCount = 0;

    const newPromptCall = async (sceneNo, direction = 1) => {
        try {
            setLoading(true);
            const result = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/story/newprompt`, {
                id, sceneNo, direction
            });

            setData([...data, result.data])

            setLoading(false);
        }
        catch (error) {
            throw error;
        }
    }

    const publish = async () => {
        push(`/publish?id=${id}`)
    }

    useEffect(() => {
        (async () => {
            console.log('infrr')
            try {
                apiCount++;
                if(apiCount === 1) {
                    console.log('infrdeder')
                    const result = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/story/${id}`);
                    setTitle(result.data.title);
                    apiCount++;
                    await newPromptCall(1);
                }
                
            }
            catch (error) {
                setError(true)
            }

        })();

    }, [router.query]);

    const directionHandler = async (direction) => {
        await newPromptCall(data.length + 1, direction);
    }

    return (
        <main className={styles.main} style={{ 'paddingTop': '5rem', paddingLeft: '20rem', justifyContent: 'center', alignItems: 'center' }}>
            {
                error ? <chakra.h3>No story found with id {id} </chakra.h3> :
                    <>
                        <chakra.h3
                            mb={6}
                            fontSize={{
                                base: "3xl",
                                md: "4xl",
                            }}
                            fontWeight="bold"
                            lineHeight="none"
                            letterSpacing={{
                                base: "normal",
                                md: "tight",
                            }}
                            color="gray.900"
                            _dark={{
                                color: "gray.100",
                            }}
                        >
                            {title}
                        </chakra.h3>

                        {
                            !data.length ? <Spinner /> : <></>
                        }
                        {
                            data && data.map((curData, idx) => (
                                <>
                                    <chakra.p style={{ marginTop: '2rem' }}>
                                        {curData.description}
                                    </chakra.p>

                                    {
                                        idx === data.length - 1 ?
                                            <>
                                                <chakra.p marginTop="2rem">
                                                    {curData.directions}
                                                </chakra.p>
                                                {
                                                    idx === data.length - 1 ?
                                                        loading ? <Spinner /> :
                                                            <Flex>
                                                                <Button onClick={() => directionHandler(1)}>
                                                                    Direction 1
                                                                </Button>
                                                                <Button onClick={() => directionHandler(2)} style={{ marginLeft: '2rem' }}>
                                                                    Direction 2
                                                                </Button>
                                                            </Flex>
                                                        : <></>
                                                }

                                            </>
                                            :
                                            <VisuallyHidden>
                                                <chakra.p>
                                                    {curData.directions}
                                                </chakra.p>
                                            </VisuallyHidden>
                                    }

                                    <Divider marginTop={'2rem'} />
                                </>
                            ))
                        }

                        {
                            data.length >= 1 && !loading ? <Button onClick={() => publish()}>Generate Storybook</Button> : <></>
                        }
                    </>
            }
        </main>
    );
}


export default StoryGenerator;