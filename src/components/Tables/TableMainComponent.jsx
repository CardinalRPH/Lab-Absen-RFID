import { faPenToSquare, faTrash, faUserSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Checkbox, ListItemIcon, ListItemText, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, TextField, Toolbar, Typography, alpha } from "@mui/material";
import { useMemo, useState } from "react";

/* eslint-disable no-undef */
const createData = (id, name, calories, fat, carbs, protein) => {
    return {
        id,
        name,
        calories,
        fat,
        carbs,
        protein,
    };
}

const rows = [
    createData(1, 'Cupcake', 305, 3.7, 67, 4.3),
    createData(2, 'Donut', 452, 25.0, 51, 4.9),
    createData(3, 'Eclair', 262, 16.0, 24, 6.0),
    createData(4, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData(5, 'Gingerbread', 356, 16.0, 49, 3.9),
    createData(6, 'Honeycomb', 408, 3.2, 87, 6.5),
    createData(7, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData(8, 'Jelly Bean', 375, 0.0, 94, 0.0),
    createData(9, 'KitKat', 518, 26.0, 65, 7.0),
    createData(10, 'Lollipop', 392, 0.2, 98, 0.0),
    createData(11, 'Marshmallow', 318, 0, 81, 2.0),
    createData(12, 'Nougat', 360, 19.0, 9, 37.0),
    createData(13, 'Oreo', 437, 18.0, 63, 4.0),
];

const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

const getComparator = (order, orderBy) => {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Dessert (100g serving)',
    },
    {
        id: 'calories',
        numeric: true,
        disablePadding: false,
        label: 'Calories',
    },
    {
        id: 'fat',
        numeric: true,
        disablePadding: false,
        label: 'Fat (g)',
    },
    {
        id: 'carbs',
        numeric: true,
        disablePadding: false,
        label: 'Carbs (g)',
    },
    {
        id: 'protein',
        numeric: true,
        disablePadding: false,
        label: 'Protein (g)',
    },
];

const EnhancedTableHead = (props) => {
    // eslint-disable-next-line react/prop-types
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell sx={{ width: 10 }}>
                    <Typography>NO</Typography>
                </TableCell>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

const EnhancedTableToolbar = (props) => {
    // eslint-disable-next-line react/prop-types
    const { numSelected, searchChange, handleDisableData, handleDeleteData, selected  } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 10%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 10%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Data Asisten
                </Typography>
            )}

            {numSelected > 0 ? (
                <Box sx={{ display: 'flex' }}>
                    <Button variant="contained" color="warning" sx={{ mx: 1 }} onClick={()=>handleDisableData(selected)}>
                        <FontAwesomeIcon size="lg" icon={faUserSlash} />
                        <Typography sx={{ mx: 1 }}>Nonaktifkan</Typography>
                    </Button>
                    <Button variant="contained" color="error" sx={{ mx: 1 }} onClick={()=>handleDeleteData(selected)}>
                        <FontAwesomeIcon size="lg" icon={faTrash} />
                        <Typography sx={{ mx: 1 }}>Delete</Typography>
                    </Button>
                </Box>

            ) : (
                <TextField id="outlined-basic" label="Cari" variant="standard" onChange={searchChange} />
            )}
        </Toolbar>
    );
}

// eslint-disable-next-line react/prop-types
const TableMainComponent = ({ handler }) => {
    // eslint-disable-next-line react/prop-types
    const { handleDeleteData, handleDisableData, handleEditOpenModal, handleRowClick } = handler
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [selectedRow, setSelectedRow] = useState(null)
    const [tempData, setTempData] = useState(rows)
    const [pointerPosition, setPointerPosition] = useState(null)

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = tempData.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        event.stopPropagation();
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tempData.length) : 0;

    const visibleRows = useMemo(
        () =>
            stableSort(tempData, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage, tempData],
    );

    const handleSearchChange = (event) => {
        const searchText = event.target.value
        // console.log(searchText);
        setTempData(rows.filter(item=>item.name.toLowerCase().includes(searchText.toLowerCase())))
    }

    const handleMenuOpen = (event, id) => {
        event.preventDefault()
        setPointerPosition({ x: event.clientX, y: event.clientY })
        setSelectedRow(id)

    }

    const handleMenuClose = () => {
        setPointerPosition(null)
        setSelectedRow(null)
    }

    const handleMenuDelete = () => {
        handleDeleteData(false, selectedRow)
        handleMenuClose()
    }
    const handleMenuDisable = () => {
        handleDisableData(false, selectedRow)
        handleMenuClose()
    }
    const handleMenuEdit = () => {
        handleEditOpenModal(selectedRow)
        handleMenuClose()
    }


    return (
        <Box sx={{ width: '100%', margin: 2 }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar
                    searchChange={handleSearchChange}
                    numSelected={selected.length}
                    handleDeleteData={handleDeleteData}
                    handleDisableData={handleDisableData}
                    selected={selected}
                />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={tempData.length}
                        />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={()=>handleRowClick(row.id)}
                                        onContextMenu={(e) => handleMenuOpen(e, row.id)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <TableCell align="center" padding="none">{page === 0 ? index + 1 : rowsPerPage + index + 1}</TableCell>
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                                onClick={(event) => handleClick(event, row.id)}
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                        >
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: 53 * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}

                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={tempData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <Menu
                anchorOrigin={pointerPosition ? { vertical: pointerPosition.y, horizontal: pointerPosition.x } : undefined}
                open={Boolean(pointerPosition)}
                onClose={handleMenuClose}
                keepMounted
            >
                <MenuItem onClick={handleMenuDisable}>
                    <ListItemIcon>
                        <FontAwesomeIcon icon={faUserSlash} />
                    </ListItemIcon>
                    <ListItemText primary='Nonaktifkan' />
                </MenuItem>
                <MenuItem onClick={handleMenuEdit}>
                    <ListItemIcon>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </ListItemIcon>
                    <ListItemText primary='Edit' />
                </MenuItem>
                <MenuItem onClick={handleMenuDelete}>
                    <ListItemIcon>
                        <FontAwesomeIcon icon={faTrash} />
                    </ListItemIcon>
                    <ListItemText primary='Delete' />
                </MenuItem>
            </Menu>
        </Box>
    );
}

export default TableMainComponent