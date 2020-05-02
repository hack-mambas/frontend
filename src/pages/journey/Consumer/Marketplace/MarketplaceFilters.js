import React from 'react'

import Box from '@material-ui/core/Box'

import MambaChip from '../../../../components/MambaChip'

export const MarketplaceFilters = () => {
  const specialties = [
    { description: 'Frutas', color: '#EF4F4F' },
    { description: 'Verduras', color: '#3EA03C' },
    { description: 'Legumes', color: '#3C783C' },
    { description: 'Carnes', color: '#E78073' },
    { description: 'Laticínios', color: '#F5C5B0' },
    { description: 'Massas', color: '#F4AF77' },
    { description: 'Bebidas', color: '#EAA069' },
    { description: 'Mel e Derivados', color: '#F5C802' }
  ]

  const handleClickChip = () => {
    console.log('teey!')
  }

  return (
    <Box display="flex" flexWrap="wrap">
      {specialties.map((specialty, index) => (
        <MambaChip key={index} color={specialty.color} label={specialty.description} onClick={() => handleClickChip} />
      ))}
    </Box>
  )
}
