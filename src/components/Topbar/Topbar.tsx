import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import './topbar.scss';
// import { Search } from '../Search';

const TopbarContainer = ({ children }: any) => (
  <div style={{ backgroundColor: '#FFE600', width: '100%', paddingTop: 5, paddingBottom: 5 }}>
    {children}
  </div>
)

const Search: React.FunctionComponent<any> = ({ value: initialValue }) => {
  const [value, setValue] = useState(initialValue);
  return (
    <div style={{ width: '100%', position: 'relative', display: 'flex' }}>
      <input style={{ color: '#333', fontSize: 18, padding: '7px', border: 'none', zIndex: 1, width: '100%', outline: 'none' }} value={value} onChange={({ target }) => setValue(target.value)} />
      <button style={{ backgroundColor: '#EEE', border: 'none', outline: 'none', width: 46, right: 0, top: 0, zIndex: 2, cursor: 'pointer', bottom: 0, padding: 0 }}>
        <img src={'/static/icons/ic_search.png'} srcSet={'/static/icons/ic_search.png, /static/icons/ic_search@2x.png 2x'} />
      </button>
    </div>
  );
};

export const Topbar = ({ value }: any) => {
  return (
    <TopbarContainer>
      <Grid container={true} style={{ margin: 'auto', maxWidth: '1280px', width: '100%' }} alignItems={'center'} spacing={2}>
        <Grid xs={2} item={true} container={true} justify={'flex-end'}>
          <img src={'/static/logos/Logo_ML.png'} srcSet={'/static/logos/Logo_ML.png, /static/logos/Logo_ML@2x.png 2x'} style={{ width: '100%', maxWidth: 50 }} />
        </Grid>

        <Grid xs={9} item={true}>
          <Search name={'searchable'} value={value} style={{ width:'100%',outline: 'none', padding: 5, fontSize: 18 }} onEnter={console.log.bind(null, 'go go')} />
        </Grid>

        <Grid xs={1} item={true}>
        </Grid>
      </Grid>
    </TopbarContainer>
  );
};
