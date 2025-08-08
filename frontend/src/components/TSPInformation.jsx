import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { TSPInformationInput, SelectField } from "./ui/InputField";

const validationSchema = Yup.object({
  lastNameEn: Yup.string().required("必須項目です"),
  firstNameEn: Yup.string().required("必須項目です"),
  lastNameKanji: Yup.string().required("必須項目です"),
  firstNameKanji: Yup.string().required("必須項目です"),
  lastNameFurigana: Yup.string().required("必須項目です"),
  firstNameFurigana: Yup.string().required("必須項目です"),
  birthDate: Yup.date().required("必須項目です"),
  gender: Yup.string().required("必須項目です"),
  nationality: Yup.string().required("必須項目です"),
  languages: Yup.array().of(
    Yup.object({
      name: Yup.string().required("必須項目です"),
      level: Yup.string().required("必須項目です"),
    })
  ),
});

const TSPInformation = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-[60px] pb-8 sm:pb-[60px]">
      <div className="max-w-[1320px] mx-auto px-2 sm:px-3">
        <div className="max-w-[1296px] bg-[#EBF5FE] rounded-3xl p-6 sm:p-[50px] flex flex-col items-center gap-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#5183F4]">
            個人情報
          </h2>
          <p className="text-[22px] sm:text-[22px] !text-right !justify-start  font-medium text-[#181A20]">
            写真
          </p>
          <div className="w-[150px] h-[150px] !items-center !justify-center overflow-hidden border-gray-300 flex-center">
            <img
              src="Objects.svg"
              alt="User Avatar"
              className="w-full h-full object-contain"
            />
          </div>
          <Formik
            initialValues={{
              lastNameEn: "",
              firstNameEn: "",
              lastNameKanji: "",
              firstNameKanji: "",
              lastNameFurigana: "",
              firstNameFurigana: "",
              birthDate: "",
              gender: "",
              nationality: "",
              languages: [
                { name: "日本語", level: "ネイティブ" },
                { name: "英語", level: "B1 中級" },
              ],
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ values }) => (
              <Form className="flex flex-col w-full max-w-[718px] gap-6">
                <div>
                  <label className="text-[#181A20] font-medium text-[22px]">
                    名前（英語）
                  </label>
                  <div className="flex gap-4 mt-1 text-base mb-6">
                    <TSPInformationInput
                      name="lastNameEn"
                      placeholder="Last (姓)"
                    />
                    <TSPInformationInput
                      name="firstNameEn"
                      placeholder="First (名)"
                    />
                  </div>
                  <span className="text-[#B1B1B1] text-sm ">
                    フルネームはプロフィールに表示されません。英語のファーストネームのみ表示されます。
                  </span>
                </div>

              
                <div>
                  <label className="text-[#181A20] font-medium text-[22px]">
                    名前（漢字）
                  </label>
                  <div className="flex gap-4 mt-1 text-base">
                    <TSPInformationInput
                      name="lastNameKanji"
                      placeholder="姓"
                    />
                    <TSPInformationInput
                      name="firstNameKanji"
                      placeholder="名"
                    />
                  </div>
                </div>

               
                <div>
                  <label className="text-[#181A20] font-medium text-[22px]">
                    名前（フリガナ）
                  </label>
                  <div className="flex gap-4 mt-1 text-base">
                    <TSPInformationInput
                      name="lastNameFurigana"
                      placeholder="セイ"
                    />
                    <TSPInformationInput
                      name="firstNameFurigana"
                      placeholder="メイ"
                    />
                  </div>
                </div>

              
                <TSPInformationInput
                  name="birthDate"
                  type="date"
                  label=""
                  helperText="誕生日や正確な年齢はプロフィールに表示されません。年齢層のみが表示されます。"
                />

                
                <div>
                  <label className="text-[#181A20] font-medium text-base">
                    性別
                  </label>
                  <div className="flex gap-4 mt-2">
                    {[
                      { value: "男性", label: "男性", icon: <img src="Vector (4).svg" /> },
                      { value: "女性", label: "女性", icon: <img src="Vector (5).svg"  /> },
                      {
                        value: "その他",
                        label: "その他",
                        icon: <img src="Vector (6).svg" />,
                      },
                    ].map((g) => (
                      <label
                        key={g.value}
                        className={`flex items-center gap-2 border rounded-lg px-4 py-2 cursor-pointer w-[100px] justify-center transition
                          ${
                            values.gender === g.value
                              ? "bg-[#5183F4] text-white border-[#5183F4]"
                              : "bg-white border-gray-300"
                          }`}
                      >
                        <Field
                          type="radio"
                          name="gender"
                          value={g.value}
                          className="hidden"
                        />
                        {g.icon} {g.label}
                      </label>
                    ))}
                  </div>
                </div>

              
                <SelectField
                  name="nationality"
                  label="国籍"
                  options={["日本", "アメリカ", "中国", "韓国", "その他"]}
                />
                <div>
                  <label className="text-[#181A20] font-medium text-base">
                    流暢に話せる言語
                  </label>
                  <FieldArray name="languages">
                    {({ remove, push }) => (
                      <div className="mt-2 flex flex-col gap-4">
                        {values.languages.map((lang, index) => (
                          <div key={index} className="flex gap-4 items-center">
                            <SelectField
                              name={`languages.${index}.name`}
                              options={[
                                "日本語",
                                "英語",
                                "中国語",
                                "韓国語",
                                "スペイン語",
                              ]}
                            />
                            <SelectField
                              name={`languages.${index}.level`}
                              options={[
                                "ネイティブ",
                                "C1 上級",
                                "B2 中上級",
                                "B1 中級",
                                "A2 初級",
                              ]}
                            />
                            {values.languages.length > 1 && (
                              <button
                                type="button"
                                className="text-red-500"
                                onClick={() => remove(index)}
                              >
                                <img src="trash-2.svg" alt="Delete" className="!w-6 h-6" />
                              </button>
                            )}
                          </div>
                        ))}
                        <button
                          type="button"
                          className="text-[#5183F4] flex items-center gap-1"
                          onClick={() => push({ name: "", level: "" })}
                        >
                          <img src="plus-circle.svg" alt="Add" className="w-6 h-6" /> 他の言語を追加する
                        </button>
                      </div>
                    )}
                  </FieldArray>
                </div>

                
                <div className="flex items-end justify-end">
                  <button
                    type="submit"
                    className="w-[150px] h-[53px] bg-[#5183F4] text-white px-[38px] py-[17px] rounded-[50px] font-bold hover:bg-blue-600 transition"
                  >
                    次
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default TSPInformation;
