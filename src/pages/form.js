import { FormControl, FormLabel, Input, Textarea, Select, Button, chakra } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css"
import { useState } from "react";

function Form() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [genre, setGenre] = useState();

    const handleSubmit = () => {
        // event.preventDefault();
        // Handle form submission
        console.log(description, genre, title)
    };

    return (
        <main className={styles.main}>
            <chakra.h3
              mb={6}
              fontSize={{
                base: "3xl",
                md: "4xl",
              }}
            //   fontWeight="bold"
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
                Let&apos;s start -
            </chakra.h3>
            <form onSubmit={handleSubmit} style={{width:'100%'}}>
                <FormControl id="title" isRequired>
                    <FormLabel>Title</FormLabel>
                    <Input placeholder="Title of the story" value={title} onChange={e => setTitle(e.target.value)}/>
                </FormControl>

                <FormControl id="description" isRequired>
                    <FormLabel>Description</FormLabel>
                    <Textarea placeholder="Description related to the story" value={description} onChange={e => setDescription(e.target.value)}/>
                </FormControl>

                <FormControl id="genre" isRequired>
                    <FormLabel>Genre</FormLabel>
                    <Select placeholder="Select genre" value={genre} onChange={e => setGenre(e.target.value)}>
                        <option value="ANIME">Anime</option>
                        <option value="RETRO_COMIC">Retro Comic</option>
                    </Select>
                </FormControl>

                <Button mt={4} colorScheme="blue" type="submit" onClick={() => handleSubmit()}>
                    Submit
                </Button>
            </form>
        </main>
    );
}

export default Form;
