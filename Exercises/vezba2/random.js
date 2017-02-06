    function appendsearchedEmployees() {
            $("#tfoot").html('');
            for (let i = 0; i < searchedEmployees.length; i++) {
                $("#tfoot").append(`
    <tr id='row${i}'>
           <td> <p>${i + 1}</p></td>
            <td> <input type="text" class="form-control" value="${searchedEmployees[i].firstName}" id="name${i}" readonly></td>
            <td> <input type="text" class="form-control" value="${searchedEmployees[i].lastName}" id="last${i}" readonly></td>
            <td> <input type="email" class="form-control" value="${searchedEmployees[i].email}" id="email${i}" readonly></td>
            <td> <input type="text" class="form-control" value="${searchedEmployees[i].password}" id="password${i}" readonly></td>
             <td> <input type="button" class="btn btn-primary" id="save${i}" value="Save"></td>
            <td> <input type="button" class="btn btn-warning" id='edit${i}' value="Edit"></td>
            <td> <input type="button" class="btn btn-danger" id='delete${i}' value="X" "</td>
    </tr>`)

                //edit button------------------------------------------------------------------------------------------------------------------------------
                $(`#edit${i}`).click(function () {
                    $(`#save${i}, #delete${i}`).css('display', 'block');
                    $(`#name${i}, #last${i}, #email${i}, #password${i}`).removeAttr('readonly');
                    $(`#edit${i}`).css('display', 'none');

                });
                //save after edit button------------------------------------------------------------------------------------------------------------------------------
                $(`#save${i}`).click(function () {
                    searchedEmployees[i].firstName = $(`#name${i}`).val();
                    searchedEmployees[i].lastName = $(`#last${i}`).val();
                    searchedEmployees[i].email = $(`#email${i}`).val();
                    searchedEmployees[i].password = $(`#password${i}`).val();
                     $(`#edit${i}`).css('display', 'block');
                    $(`#save${i}, #delete${i}`).css('display', 'none');
                    $(`#name${i}, #last${i}, #email${i}, #password${i}`).attr('readonly', 'readonly');

                });
                //delete button------------------------------------------------------------------------------------------------------------------------------
                $(`#delete${i}`).click(function () {
                    $(`#row${i}`).remove();
                    searchedEmployees.splice(i, 1);
                    appendsearchedEmployees();

                });
            }
        };