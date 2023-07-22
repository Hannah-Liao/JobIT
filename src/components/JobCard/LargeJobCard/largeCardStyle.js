import { styled } from "@mui/system";

export const CardHeaderContainer = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%'
})

export const CardHeaderImage = styled('img')(({ theme }) => ({
  width: '100%',
  objectFit: 'cover',
  [theme.breakpoints.down('sm')]: {
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
  },
  [theme.breakpoints.up('sm')]: {
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
  },
  height: '12rem',
}))

export const CompanyLogo = styled('img')({
  position: 'absolute',
  left: '30px',
  bottom: '-17px',
  border: '2px solid #fff',
  borderRadius: '10px',
})

export const CardTitleWrapper = styled('div')({
  display: 'flex',
  gap: '6px',
  alignItems: 'center',
  height: '100%'
})

export const ButtonWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '0.5rem',
  [theme.breakpoints.down(600)]: {
    order: '1',
    marginTop: '15px'
  },
  [theme.breakpoints.up(600)]: {
    order: '0',
    marginTop: '0'
  }
}))

export const MenuBtn = styled('button')({
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer'
})

export const RequirementWrapper = styled('div')({
  display: 'grid',
  backgroundColor: 'customColor.requirementBg', // this will be added in theme.js later by hana and suraj
  borderRadius: '10px',
  padding: '15px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
  width: '100%',
  gap: '16px',
  marginTop: '2.5rem'
})

export const Wrapper = styled('div')(props => ({
  display: 'flex',
  alignItems: 'center',
  gap: props.gap ? props.gap : '0',
  flexWrap: props.wrap ? 'wrap' : 'inherit',
  justifyContent: 'space-between',
}))