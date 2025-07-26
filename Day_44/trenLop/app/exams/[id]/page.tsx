'use client'

import {Box, Grid} from "@mui/material";
import style from './style.module.sass'
import QuestionDescription from './Description'
import QuestionSelection from './Selection'
import HeaderBar from './Header'
import FooterBar from './Footer'
import {useParams} from "next/navigation";
import api from "@/plugins/api";
import {useEffect, useState} from "react";


const defaultExam = {
  id: undefined,
  title: '',
  description: '',
  details: [
    {
      id: undefined,
      section: 0,
      module: 0,
      question: {
        id: undefined,
        code: '',
        description: '',
        question: '',
        type: 'multiple-choice',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correctAnswer: '',
        explanation: '',
        topic: {
          id: 1,
          name: "Mathematics",
          shortName: "Math"
        }
      }
    }
  ]
}

export const PARTS = [
  {section: 1, module: 1},
  {section: 1, module: 2},
  {section: 2, module: 1},
  {section: 2, module: 2},
]

export default function () {

  const params = useParams()
  const {id} = params

  // State: exam
  const [exam, setExam] = useState(defaultExam)

  const getExams = async () => {
    try {
      const { data} = await api.get(`/exams/${id}`)
      setExam(data)
      console.log(data)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getExams()
  }, [])


  return (
    <>
      <HeaderBar/>
      <Box sx={{margin: '0 5%'}} className={style.main}>
        <Grid container>
          <Grid size={6} sx={{paddingTop: '10px'}}>
            <QuestionDescription/>
          </Grid>
          <Grid size={6}>
            <QuestionSelection/>
          </Grid>
        </Grid>
      </Box>
      <FooterBar/>
    </>
  )
}