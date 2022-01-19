import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { customTheme } from 'common/theme';
import './SearchInput.css';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -5,
    // width: '80%',
  },
}));

type SearchInputProps = {
  placeholder: string;
  label: string;
  icon: JSX.Element;
};

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  label,
  icon,
}) => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      {icon}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        marginLeft={0}
      >
        <div className="search-input-container">
          <input
            style={{
              width: '80%',
            }}
            placeholder={placeholder}
            type="text"
            className="search-input"
          />
        </div>
        {/* <BasicInput
          id="outlined-basic"
          label={placeholder}
          variant="outlined"
          size="small"
          color="secondary"
          style={{ borderRadius: 30 }}
        /> */}
        <Box marginLeft={2} fontSize={10} color={customTheme.color.darkGrey}>
          {label}
        </Box>
      </Box>
    </Box>
  );
};

export default SearchInput;
