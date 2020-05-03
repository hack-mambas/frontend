import React, { memo, useMemo, useCallback } from 'react'

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import { TextField } from 'formik-material-ui'

import { Box, Paper, Typography, Grid, Button } from '@material-ui/core'

const Category = memo(() => {
  const validationSchema = useMemo(() => {
    return Yup.object({
      nome: Yup.string().required('Campo obrigatório!')
    })
  }, [])

  const initialValues = useMemo(() => {
    return {
      nome: ''
    }
  }, [])

  const onSubmit = useCallback((values, formik) => {
    formik.setSubmitting(false)
  }, [])

  return (
    <Box my={2}>
      <Paper>
        <Box display="flex" flexDirection="column" width={1} p={2}>
          <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnBlur={false}
          >
            {({}) => (
              <Form noValidate>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography>Categoria</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Field component={TextField} name="nome" label="Nome" variant="outlined" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="flex-end">
                      <Button type="submit" variant="outlined" color="primary">
                        Salvar
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Paper>
    </Box>
  )
})

export default Category
