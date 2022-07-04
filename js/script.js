function sortTable(n){
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchCount = 0;
    table = document.getElementById("sortableTable");
    switching = true;
    dir = "asc";

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            if (dir === "asc") {
                if (x.innerHTML.localeCompare( y.innerHTML, "sk") === 1) {
                    shouldSwitch = true;
                    break;
                }
            }

            else if (dir === "desc") {
                if (x.innerHTML.localeCompare( y.innerHTML, "sk") === -1) {
                    shouldSwitch = true;
                    break;
                }
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchCount ++;
            }

        else {
            if (switchCount === 0 && dir === "asc") {
                dir = "desc";
                switching = true;
                switchCount ++;
            }
        }

        if(n===3 && switchCount===1)
            sortTable(2);
    }
}