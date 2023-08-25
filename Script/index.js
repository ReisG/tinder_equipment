function fetchData() {
    let unit_function = document.getElementById('unit_function').value;
    let unit_type = document.getElementById('unit_type').value;
    let unit_name = document.getElementById('unit_name').value;
    let certificate = document.getElementById('certificate').value;
    let gen_power = document.getElementById('gen_power').value;
    let battery_capacity = document.getElementById('battery_capacity').value;
    let installation_date = document.getElementById('installation_date').value;
    let service_life = document.getElementById('service_life').value;
    let device_status = document.getElementById('device_status').value;

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

    unit_function = unit_function_option[unit_function]
    unit_type = unit_type_option[unit_type]
    device_status = device_status_option[device_status]

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

    return data;
}