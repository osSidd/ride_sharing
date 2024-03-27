import { Box, Chip, Typography } from "@mui/material";

export default function Feed({feed, mobile=false}){
    return (
        <Box overflow='auto' maxHeight='75vh'>
            <Box
                component='img'
                src={feed.multimedia}
                alt=""
                width={mobile ? '85%' : '100%'}
                height='auto'
                sx={{display:'block', mx:mobile ? 0 :'auto'}}
            />
            <Typography fontSize={mobile ? 16 : 24} variant="h4" mt={2}>{feed.title}</Typography>
            <Chip color='info' sx={{mt:2}} label={feed.category}></Chip>
            <Typography mt={2}>{feed.createdAt}</Typography>
            <Typography fontSize={mobile ? 14 : 16} marginRight={mobile ? 4 : 0}  mt={2}>{feed.content}</Typography>
            <Chip label={feed.status} sx={{mt:2}} color={`${feed.status === 'Draft'? 'warning': 'success'}`}></Chip>
        </Box>
    )
}