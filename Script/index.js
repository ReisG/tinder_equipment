function fetchData() {
    let data_container = document.getElementById('data_container').childNodes;
    let res = [];

    let unit_function_option = {
        "Не выбрано": "not_selected",
        "Генерирующие оборудование": "gen_equipment",
        "Накопитель": "storage",
        "Преобразователь": "convertor",
    }

    let unit_type_option = {
        "Выберите устройство выше": "choose_above",
        "Инвертор": "convent",
        "Активный фильтр": "active_filter",
        "Накопитель энергии": "energy_storage",
        "Электромобиль": "electromobile",
        "Солнечные панели": "sun_panels",
        "Дизельный генератор": "diesel_gen",
        "Ветряной генератор": "wind_gen",
        "Гидрогенератор": "water_gen",
    }

    let device_status_option = {
        "В работе": "in_work", 
        "В ремонте": "under_repair", 
    }

    for (let i = 0; i < data_container.length; i++)
    {
        let ch = data_container[i];

        let unit_function = ch.querySelector('#unit_function').value;
        let unit_type = ch.querySelector('#unit_type').value;
        let unit_name = ch.querySelector('#unit_name').value;
        let certificate = ch.querySelector('#certificate').value;
        let gen_power = ch.querySelector('#gen_power').value;
        let battery_capacity = ch.querySelector('#battery_capacity').value;
        let installation_date = ch.querySelector('#installation_date').value;
        let service_life = ch.querySelector('#service_life').value;
        let device_status = ch.querySelector('#device_status').value;

        unit_function = unit_function_option[unit_function];
        unit_type = unit_type_option[unit_type];
        device_status = device_status_option[device_status];

        let data = {
            unit_function: unit_function,
            unit_type: unit_type,
            unit_name: unit_name,
            certificate: certificate,
            gen_power: gen_power,
            battery_capacity: battery_capacity,
            installation_date: installation_date,
            service_life: service_life,
            device_status: device_status,
        }

        res.push(data);
    }

    res = {"units" : res}
    res["web_app_name"] = "block_creation";

    return res;
}