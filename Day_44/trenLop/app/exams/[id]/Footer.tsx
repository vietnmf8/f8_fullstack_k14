'use client'

import style from "./style.module.sass";
import {Box, Button, Menu} from "@mui/material";
import {useContext, useState} from "react";
import CropSquareIcon from '@mui/icons-material/CropSquare';
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ReviewQuestions from "./ReviewQuestions";

export default function () {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const onOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const onBack = () => {
  }

  const onNext = () => {
  }


  return (
    <Box className={style.footer}>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          sx: {
            mt: -1, // margin top negative (about 8px unit) to push up
          },
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Box sx={{ padding: 2 }} className={style.memu}>
          <h2>Section 1 - Module 1</h2>
          <Box>
            <Box>
              <CropSquareIcon/>
              <span>Unanswered</span>
            </Box>
            <Box>
              <CropSquareIcon color={'warning'}/>
              <span>Answered</span>
            </Box>
            <Box>
              <BookmarkBorderIcon color={'error'}/>
              <span>Review</span>
            </Box>
          </Box>

          <ReviewQuestions/>

          <Box>
            <Button variant={'outlined'}>Go to review page</Button>
          </Box>
        </Box>
      </Menu>

      <Button
        variant="outlined"
        className={style.viewQuestionsBtn}
        onClick={onOpenMenu}
      >
        Questions
      </Button>

      <Box className={style.navigation}>
        <Button
          variant="outlined"
          onClick={onBack}
        >
          Back
        </Button>

        <Button
          variant="outlined"
          onClick={onNext}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
