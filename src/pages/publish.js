import { Button, chakra, Divider, VisuallyHidden, Spinner, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import axios from 'axios';
import styles from "@/styles/Home.module.css"

function StoryGenerator() {

    const [data, setData] = useState();
    const [err, setErr] = useState(false);
    const router = useRouter();
    const { id } = router.query;


    const getDetails = async () => {
        try {
            if (!id) {
                return;
            }
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/story/${id}`);

            setErr(false);
            setData(res.data);
        }
        catch (err) {
            setErr(true);
            console.log(err)
        }
    }

    useEffect(() => {
        getDetails();
        console.log(id)
    }, [router.query])



    return (
        <main className={styles.main} style={{ 'paddingTop': '5rem', paddingLeft: '20rem', justifyContent: 'center', alignItems: 'center' }}>
            {
                err ? <chakra.h3>No story found with id {id}</chakra.h3>
                    :
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
                            {data && data.title}
                        </chakra.h3>


                        <chakra.p style={{ marginTop: '2rem' }}>
                            {data && data.story}
                        </chakra.p>

                        <div style={{ position: 'relative', marginTop:'5rem' }}>
                            {data && data.image && data.image.map((img, idx) => {
                                return <Image src={img} alt="comic" key={idx} layout="fill" />
                            })}
                        </div>
                    </>
            }
        </main>
    );
}


export default StoryGenerator;