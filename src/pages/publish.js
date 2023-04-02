import { Button, chakra, Divider, VisuallyHidden, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css"

function StoryGenerator() {

    const [data, setData] = useState(['ss', 's', 'd', 'd']);

    return (
        <main className={styles.main} style={{ 'paddingTop': '5rem', paddingLeft: '20rem', justifyContent: 'center', alignItems: 'center' }}>
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
                Title -
            </chakra.h3>


            <chakra.p style={{ marginTop: '2rem' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </chakra.p>


        </main>
    );
}


export default StoryGenerator;