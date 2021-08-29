import React, { useEffect, useState } from "react"
import { Paper, Container, Grid } from "@material-ui/core"

export default function Commentaires() {
    const [commentaires, setCommentaires] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/messages')
            .then(res => res.json())
            .then(data => setCommentaires(data))
    }, [])
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper>1</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper>2</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper>3</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper>4</Paper>
                </Grid>
            </Grid>

            <Grid container>
            {commentaires.map(commentaire => (
                <Grid key={commentaire.content} xs={12} md={6} lg={4}>
                    <Paper>
                    { commentaire.title }
                    </Paper>
                </Grid>
            ))}
            </Grid>
        </Container>
    )
}