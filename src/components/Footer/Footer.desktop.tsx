import {
  Box,
  InputAdornment,
  TextField,
  Theme,
  Typography,
} from '@mui/material';
import { makeStyles, styled } from '@mui/styles';
import { customTheme } from 'common/theme';

import sendIcon from 'statics/img/send.png';
import logo from 'statics/img/logoSoft.png';
import { useContext } from 'react';
import { FooterPositionContext } from 'context/FooterPositionContext';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from 'components/Icons';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'absolute',
    bottom: (props: any) => props.bottom || -1000,
    left: 0,
    width: '96.8%',
    minHeight: 300,
    backgroundColor: theme.palette.secondary.light,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  footerTop: {
    width: '100%',
    display: 'flex',
    [theme.breakpoints.down('tablet')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.up('tablet')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.up('laptop')]: {
      flexDirection: 'row',
    },
  },
  footerTopRight: {
    width: '100%',
    display: 'grid',
    [theme.breakpoints.down('tablet')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
    [theme.breakpoints.up('tablet')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.up('laptop')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    gap: 10,
  },
}));

const menuItemStyle = { fontWeight: 400, marginBottom: 8, cursor: 'pointer' };

const menuLeft = [
  { label: 'HAKKIMIZDA', link: '' },
  { label: 'BANKA HESAPLARIMIZ', link: '' },
  { label: 'İLETİŞİM', link: '' },
];

const menuRight = [
  { label: 'İŞ BİRLİĞİ', link: '' },
  { label: 'GİZLİLİK SÖZLEŞMESİ', link: '' },
  { label: 'ÖDEME SEÇENEKLERİ', link: '' },
];

const SendEmailInput = styled(TextField)({
  '& label.Mui-focused': {
    color: customTheme.color.orange,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: customTheme.color.orange,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
      borderWidth: 0,
      backgroundColor: '#ffffff0',
      borderRadius: 15,
    },
    '&:hover fieldset': {
      borderColor: customTheme.color.orange,
    },
    '&.Mui-focused fieldset': {
      borderColor: customTheme.color.orange,
    },
  },
});

const FeedBackItem: React.FC = () => {
  return (
    <Box
      bgcolor="#fff"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      borderRadius={50}
      padding={1}
      minWidth={280}
      marginRight={10}
    >
      <Box
        marginRight={1}
        bgcolor="#4b4949"
        borderRadius={30}
        width={80}
        height={60}
      ></Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Typography variant="h4">SAPANCA ALA HOUSE</Typography>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          Tek kelime ile harikaydı. Teşekkürler buvibu
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Typography variant="body1">Eda Kayapınar</Typography>
          <Box marginLeft={1}>4.9</Box>
        </Box>
      </Box>
    </Box>
  );
};

type FooterMobileProps = {
  onSendContact?: VoidFunction;
  contactChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  contact?: string;
};

const FooterDesktop: React.FC<FooterMobileProps> = ({
  onSendContact,
  contactChange,
  contact,
}) => {
  const { state: footerState } = useContext(FooterPositionContext);
  const styles = useStyles({ bottom: footerState.bottom });
  return (
    <Box className={styles.root}>
      <Box className={styles.footerTop}>
        <Box display="flex" flexDirection="column" height={200}>
          <Box style={{ transform: 'scale(0.5) translate(0%, -50%)' }}>
            <FeedBackItem />
          </Box>
          <Box style={{ transform: 'scale(0.5) translate(20%, -150%)' }}>
            <FeedBackItem />
          </Box>
          <Box style={{ transform: 'scale(0.5) translate(0%, -250%)' }}>
            <FeedBackItem />
          </Box>
          <Box style={{ transform: 'scale(0.5) translate(20%, -350%)' }}>
            <FeedBackItem />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" width="100%">
          <Box className={styles.footerTopRight}>
            <nav>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                borderRight={`1px solid ${customTheme.color.grey}`}
              >
                <Typography variant="h4" style={{ marginBottom: 8 }}>
                  KURUMSAL
                </Typography>
                {menuLeft.map(({ label }) => (
                  <Typography key={label} variant="h4" style={menuItemStyle}>
                    {label}
                  </Typography>
                ))}
              </Box>
            </nav>
            <nav>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Typography variant="h4" style={{ marginBottom: 8 }}>
                  HUKUKSAL
                </Typography>
                {menuRight.map(({ label }) => (
                  <Typography key={label} variant="h4" style={menuItemStyle}>
                    {label}
                  </Typography>
                ))}
              </Box>
            </nav>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography variant="h4" style={{ marginBottom: 8 }}>
                BİZE KATILIN
              </Typography>
              <Box bgcolor="#fff" borderRadius={15} marginBottom={1}>
                <SendEmailInput
                  id="outlined-basic"
                  label="Telefon No:"
                  variant="outlined"
                  size="small"
                  color="secondary"
                  style={{ borderRadius: 30 }}
                  onChange={contactChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          width={30}
                          height={30}
                          borderRadius={15}
                          bgcolor={customTheme.color.orange}
                          style={{ cursor: 'pointer' }}
                          onClick={onSendContact}
                        >
                          <img src={sendIcon} width={20} height={20} alt="" />
                        </Box>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Typography variant="h4" style={{ marginBottom: 8 }}>
                SOSYAL MEDYA
              </Typography>
              <Box display="flex" flexDirection="row" width="fit-content">
                <InstagramIcon style={{ marginRight: 3, cursor: 'pointer' }} />
                <YoutubeIcon style={{ marginRight: 3, cursor: 'pointer' }} />
                <FacebookIcon style={{ cursor: 'pointer' }} />
              </Box>
            </Box>
          </Box>
          <Box
            width="100%"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
          >
            <img src={logo} alt="" width={200} />
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontSize={13}
        color={customTheme.color.darkGrey}
        padding={5}
      >
        BuViBu.com Bir Skttur Kuruluşudur. BuViBu.com sitesinde yer alan tüm
        metin, resim ve içeriklerin telif hakları Skttur’a aittir. Hiçbir
        şekilde basılı veya elektronik bir ortamda izinsiz kullanılamaz ve
        kopyalanamaz. Tüm otel bilgileri ve fiyatlar bilgilendirme amaçlı olup,
        değişiklik arz edebilir. Fiyat ve bilgi yanlışlıklarından BuViBu.com
        sorumlu tutulmaz. Otel kategorileri ve yıldız sayıları T.C. Turizm
        Bakanlığı tarafından belirlenir. Kullanıcılar BuViBu.com Site Kullanım
        Kuralları ve Güvenlik Politikası’nı kabul etmiş sayılırlar.
      </Box>
    </Box>
  );
};

export default FooterDesktop;
