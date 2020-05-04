import React, { memo, useMemo, useCallback } from 'react'

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import { TextField } from 'formik-material-ui'

import { Box, Typography, Grid, Button, Container, makeStyles, Icon } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#FFF'
  },
  input: {
    display: 'none'
  }
}))

const Product = memo(() => {
  const classes = useStyles()

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
    console.log('values', values)
    formik.setSubmitting(false)
  }, [])

  return (
    <div className={classes.root}>
      <Container>
        <Box display="flex" flexDirection="column" width={1} p={2}>
          <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnBlur={false}
          >
            {({ values, setFieldValue }) => (
              <Form noValidate>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                      Produto
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                      {values.file && (
                        <Box p={2}>
                          <img alt="" src={values.file} className={classes.img} height={200} width={200} />
                        </Box>
                      )}
                      <Box p={2}>
                        <input
                          accept="image/*"
                          className={classes.input}
                          id="icon-button-file"
                          type="file"
                          name="file"
                          onChange={(e) => {
                            var file = e.target.files[0]
                            var reader = new FileReader()
                            reader.onload = function (item) {
                              setFieldValue('file', item.target.result)
                            }
                            reader.readAsDataURL(file)
                          }}
                        />
                        <label htmlFor="icon-button-file">
                          <Button
                            color="primary"
                            aria-label="upload picture"
                            variant="contained"
                            className={classes.button}
                            endIcon={<Icon>photo_camera</Icon>}
                            component="span"
                          >
                            Adicionar imagem
                          </Button>
                        </label>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Field component={TextField} name="nome" label="Nome" variant="outlined" fullWidth />
                  </Grid>

                  <Grid item xs={12}>
                    <Field component={TextField} name="valorUnitario" label="Valor" variant="outlined" fullWidth />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      name="descricaoBreve"
                      label="Descrição breve"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      name="descricaoCompleta"
                      textarea
                      label="Descrição completa"
                      variant="outlined"
                      fullWidth
                    />
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
      </Container>
    </div>
  )
})

export default Product
