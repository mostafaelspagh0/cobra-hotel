import {Container, IconButton} from "@mui/material";
import {Fragment, useContext, useEffect, useState} from "react";
import {DataGrid} from '@mui/x-data-grid';
import Grid from "@mui/material/Grid";
import {
    FormControl,
    InputAdornment,
    OutlinedInput,
    Paper,
} from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import {Outlet, useLocation} from "react-router-dom";
import {HrContext} from "../context/hrContext";
import Button from "@mui/material/Button";


const Hr = () => {
    const {
        getPage,
        popup,
        isLoading,
        rows,
        columns,
        page,
        closeEdit,
        init,
        addSearchTerm,
        searchTerm
    } = useContext(HrContext);
    const [searchText, setSearchText] = useState(searchTerm);
    const location = useLocation();
    if (location.pathname.includes('edit') === false && popup) {
        closeEdit();
    }
    const handleSearch = (e) => {
        e.preventDefault();
        addSearchTerm(searchText);
    };
    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };
    const handlePageChange = (page) => {
        getPage(page);
    };
    useEffect(() => {
        init();
    }, []);
    return (
        <Fragment>
            {popup &&
                <Paper
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        height: '80%',
                        padding: '20px',
                        zIndex: '1000'
                    }}>
                    <Outlet/>
                </Paper>
            }
            <Container style={
                (popup) ? {
                    WebkitFilter: 'blur(5px)',
                    MozFilter: 'blur(5px)',
                    MsFilter: 'blur(5px)',
                    OFilter: 'blur(5px)',
                    filter: 'blur(5px)',
                    pointerEvents: 'none'
                } : {}
            }>
                <Grid container spacing={3} justifyContent={'center'} >
                    <Grid item xs={12}/>
                    <Grid item xs={8} component={"form"} onSubmit={handleSearch}>
                        <FormControl
                            fullWidth>
                            <OutlinedInput
                                onChange={handleSearchChange}
                                value={searchText}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton type={"submit"}>
                                            <SearchIcon/>
                                        </IconButton>

                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={4} alignSelf={"center"}>
                        <Button
                            variant={"contained"}
                            color={"primary"}
                            fullWidth
                            size={"large"}
                            >
                                Add
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <DataGrid
                            loading={isLoading}
                            getRowId={(row) => row._id}
                            rows={rows.users}
                            disableSelectionOnClick
                            pageSize={10}
                            page={page}
                            onPageChange={(p,) => {
                                handlePageChange(p)
                            }}
                            rowsPerPageOptions={[10]}
                            rowCount={rows.count}
                            paginationMode={"server"}
                            columns={columns}
                            style={
                                {
                                    minHeight: "65vh",
                                    width: '100%',
                                    overflow: 'auto',
                                }
                            }
                        />
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    );
}
export default Hr;