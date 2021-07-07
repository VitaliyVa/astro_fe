
function create_city_select({ city_name, select_noResult, api }) {
    let select_city = $(city_name).select2({
        dropdownAutoWidth: true,
        width: "resolve",

        language: {
            noResults: function () {
                return gettext(select_noResult);
            },
        },
        ajax: {
            url: api,
            data: function (params) {
                var query = {
                    per_page: 20,
                    title: params.term,
                    page_number: params.page || 1,
                };

                return query;
            },
            processResults: function (data, params, ...props) {
                params.page = params.page || 1;

                let options = data.results.map((item) => {
                    let result;
                    if (item.region.title != '') {
                        result = `${item.title} (${item.region.title})`;
                    } else {
                        result = `${item.title}`;
                    }
                    return {
                        id: item.id,
                        text: result,
                        item,
                    };
                });

                return {
                    results: options,
                    pagination: {
                        more: params.page * 30 < data.count,
                    },
                };
            },
        },
    });

    return select_city;
}


function create_department_select({ city_name, department_name, select_noResult, api }) {
    $(department_name).select2({
        dropdownAutoWidth: true,
        width: "resolve",
        language: {
            noResults: function () {
                return gettext(select_noResult);
            },
        },
    });

    $(city_name).on("select2:select", function (e) {
        $(department_name).val([]).trigger("change");
        $(department_name).empty();
        let item = e.params.data.item.title;

        fetch(`${api}?query=${item}`, {
            method: "GET",
        })
            .then((data) => {
                return data.json();
            })
            .then((body) => {
                if (body.count != 0) {
                    for (let key in body.results) {
                        let option_area = document.createElement("option");
                        option_area.textContent = body.results[key].title;
                        $(department_name)[0].appendChild(option_area);
                    }
                }
            });
    });
}


export { create_city_select, create_department_select }
