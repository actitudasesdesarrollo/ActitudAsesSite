import xlsx from "xlsx";

class Xlsx {
	constructor() {}

	convertJsonToExcel = async (json, name, route = "") => {
		try {
			const workSheet = xlsx.utils.json_to_sheet(json);
			const workBook = xlsx.utils.book_new();

			xlsx.utils.book_append_sheet(workBook, workSheet, name);

			xlsx.write(workBook, { bookType: "xlsx", type: "buffer" });

			xlsx.write(workBook, { bookType: "xlsx", type: "binary" });

			if (route) {
				await xlsx.writeFile(
					workBook,
					`${route ? `${route}/` : ""}${name}.xlsx`
				);
			} else {
				const bufferFile = await xlsx.write(workBook, {
					type: "binary",
					bookType: "xlsx",
				});

				return bufferFile;
			}
		} catch (error) {
			console.log(error);
		}
	};
}

const xlsxManager = new Xlsx();
export default xlsxManager;
