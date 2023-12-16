Search.setIndex({"docnames": ["Documentation/not_done/Customization", "Documentation/not_done/Fine-tuning_using_hugging_face_libraries", "Documentation/not_done/How to load an adapter and attach it to the model", "Documentation/not_done/How to load data based on an adapter fine-tuned on a sample of synthetic data generated by GPT-4", "Documentation/not_done/HuggingFace base model interaction", "Documentation/not_done/Introduction", "Documentation/scripts/Chainlit", "Documentation/scripts/Fine-tuning_using_Ludwig", "Documentation/scripts/GPT4", "Documentation/scripts/Group_Members", "Documentation/scripts/How to load an adapter and attach it to the model (GPU)", "Documentation/scripts/Model", "Documentation/scripts/Pushing the adapter to HuggingFace repo", "Documentation/scripts/Setup", "Documentation/scripts/Synthetic_data", "index"], "filenames": ["Documentation/not_done/Customization.rst", "Documentation/not_done/Fine-tuning_using_hugging_face_libraries.rst", "Documentation/not_done/How to load an adapter and attach it to the model.rst", "Documentation/not_done/How to load data based on an adapter fine-tuned on a sample of synthetic data generated by GPT-4.rst", "Documentation/not_done/HuggingFace base model interaction.rst", "Documentation/not_done/Introduction.rst", "Documentation/scripts/Chainlit.rst", "Documentation/scripts/Fine-tuning_using_Ludwig.rst", "Documentation/scripts/GPT4.rst", "Documentation/scripts/Group_Members.rst", "Documentation/scripts/How to load an adapter and attach it to the model (GPU).rst", "Documentation/scripts/Model.rst", "Documentation/scripts/Pushing the adapter to HuggingFace repo.rst", "Documentation/scripts/Setup.rst", "Documentation/scripts/Synthetic_data.rst", "index.rst"], "titles": ["Customization", "Fine-tuning using hugging face libraries", "How to load an adapter and attach it to the model", "How to load data based on an adapter fine-tuned on a sample of synthetic data generated by GPT-4", "HuggingFace base model interaction", "Introduction", "Chainlit: an easy way to interact with LLMs", "Fine-tuning using Ludwig", "Data Generation for LLM Fine-tuning with Synthetic Data", "The team", "How to load an adapter and attach it to the model (GPU)", "Model", "Pushing the adapter into HuggingFace", "Setup", "Synthetic Data", "Welcome to Chat2IA\u2019s documentation!"], "terms": {"In": [6, 8, 12], "thi": [6, 7, 8, 10, 12, 13], "section": [6, 8, 12], "we": [6, 7, 8, 12], "ll": 6, "demonstr": [6, 8], "process": [6, 7, 10, 14], "engag": 6, "open": [6, 10, 12], "sourc": [6, 12], "languag": [6, 7], "your": [6, 10, 12], "choic": [6, 12], "avail": [6, 13], "hug": [6, 10, 12], "face": [6, 10, 12], "hub": [6, 10, 12], "To": [6, 7, 8, 10, 12, 13], "facilit": 6, "leverag": [6, 8], "librari": [6, 12], "asynchron": 6, "python": [6, 10, 13], "framework": 6, "design": 6, "expedit": 6, "creation": 6, "applic": [6, 7, 8], "akin": 6, "chatgpt": 6, "enabl": [6, 7], "seamless": 6, "through": [6, 8, 12, 13], "automat": 6, "gener": [6, 10, 12, 14, 15], "user": [6, 7], "For": [6, 12, 13], "more": [6, 7, 13], "detail": [6, 13], "insight": 6, "its": [6, 7], "function": [6, 10], "further": [6, 7], "inform": [6, 10], "i": [6, 7, 8, 10, 12, 13], "here": [6, 7], "There": 6, "video": 6, "tutori": 6, "get": 6, "start": [6, 13], "need": [6, 8, 12], "instal": [6, 11, 14], "other": [6, 8], "depend": [6, 10, 13], "do": [6, 7, 12], "so": [6, 12], "creat": [6, 7, 8, 10, 12, 13], "new": [6, 7, 8, 12], "virtual": [6, 13], "environ": [6, 7, 8, 10, 13], "us": [6, 8, 10, 12, 13], "follow": [6, 7, 10, 12, 13], "command": [6, 10, 12], "python3": 6, "m": 6, "venv": 6, "chainlit_env": 6, "anaconda": 6, "conda": [6, 13], "n": [6, 7], "3": [6, 9, 11, 12, 14], "11": 6, "next": [6, 10, 14, 15], "activ": [6, 13], "necessari": [6, 10], "bin": [6, 12], "pip": [6, 7, 10, 13], "ctransform": 6, "langchain": 6, "torch": [6, 7, 10], "from": [6, 7, 8, 10, 12, 13], "should": 6, "gguf": 6, "format": 6, "link": 6, "you": [6, 10, 12, 13], "can": [6, 7, 10, 13], "find": 6, "mistral": [6, 8, 10], "ha": 6, "name": [6, 7, 12], "7b": [6, 7, 10], "instruct": [6, 7, 10, 13], "v0": [6, 10], "1": [6, 9, 11, 14], "q4_k_": 6, "becaus": 6, "rest": 6, "If": [6, 10, 12], "want": [6, 7, 10, 12], "anoth": 6, "just": [6, 10], "search": 6, "one": 6, "theblok": 6, "": [6, 8, 10], "repositori": [6, 10, 12, 13], "caption": 6, "text": [6, 7], "goe": 6, "now": [6, 7, 12], "let": [6, 7], "file": [6, 10, 13], "call": [6, 7, 12], "app": 6, "py": [6, 13], "import": [6, 10], "o": [6, 7], "cl": 6, "input_widget": 6, "slider": 6, "switch": 6, "chain": [6, 8], "llmchain": 6, "prompt": [6, 7, 8, 10], "prompttempl": 6, "variabl": 6, "store": 6, "path": 6, "earlier": 6, "local_llm": 6, "http": [6, 7], "huggingfac": [6, 11, 15], "co": 6, "tree": 6, "main": 6, "configur": [6, 7, 11, 14], "dictionari": 6, "paramet": [6, 10], "initi": 6, "our": [6, 8], "config": [6, 7, 12, 13], "max_new_token": [6, 7, 10], "128": 6, "repetition_penalti": 6, "temperatur": [6, 7], "0": [6, 7, 10], "5": [6, 7, 10, 14, 15], "top_p": 6, "9": [6, 7], "top_k": 6, "50": 6, "stream": 6, "true": [6, 10], "thread": 6, "int": [6, 7], "cpu_count": 6, "2": [6, 9, 11, 12, 14], "valu": [6, 7, 13], "ar": [6, 7, 8, 10], "default": 6, "pleas": [6, 12], "refer": [6, 12, 13], "document": [6, 13], "widget": 6, "allow": [6, 7, 8, 12], "adjust": 6, "chatset": 6, "class": 6, "set": [6, 7, 8, 13], "await": 6, "id": 6, "label": 6, "min": [6, 7], "max": [6, 7], "step": [6, 10, 13, 14, 15], "repetit": 6, "penalti": 6, "top": [6, 10], "p": 6, "k": 6, "100": 6, "token": [6, 10, 12], "1024": 6, "send": 6, "panel": 6, "whenev": 6, "chang": 6, "setup": [6, 14, 15], "setup_ag": 6, "updat": [6, 7, 8, 13], "well": [6, 8], "appli": 6, "def": [6, 7], "llm_init": 6, "model_typ": [6, 7], "lib": 6, "avx2": 6, "avx512": 6, "templat": [6, 7], "question": 6, "answer": 6, "input_vari": 6, "llm_chain": 6, "verbos": 6, "fals": [6, 10], "save": 6, "session": [6, 8], "user_sess": 6, "have": [6, 7, 10, 12, 13], "object": 6, "feed": [6, 7], "take": 6, "string": 6, "list": 6, "input": [6, 7, 10], "contain": [6, 10], "replac": 6, "case": [6, 8], "ask": [6, 7], "after": [6, 12], "final": 6, "access": [6, 7, 12, 13], "later": 6, "on_settings_upd": 6, "decor": 6, "on_chat_start": 6, "async": 6, "content": [6, 12], "readi": 6, "chat": 6, "on_messag": 6, "messag": 6, "respons": [6, 7, 8, 10], "result": [6, 7, 8, 12], "acal": 6, "callback": 6, "asynclangchaincallbackhandl": 6, "retriev": 6, "method": [6, 7, 10], "handl": 6, "handler": 6, "sent": 6, "w": 6, "see": [6, 7, 12], "someth": 6, "like": [6, 7], "onc": [6, 8, 10, 13], "load": [6, 7, 11, 15], "appear": 6, "edit": 6, "md": [6, 13], "adapt": [7, 8, 11, 15], "pre": [7, 10], "train": [7, 8, 10, 12], "specif": [7, 8, 10], "task": [7, 10], "model": [7, 8, 12, 14, 15], "weight": [7, 10], "lead": 7, "perform": [7, 8], "improv": [7, 8], "It": [7, 10], "mean": 7, "person": 7, "special": 7, "optim": [7, 8], "uniqu": [7, 8], "involv": [7, 8, 10], "all": 7, "proven": 7, "resourc": 7, "intens": 7, "time": [7, 8], "consum": 7, "alwai": 7, "yield": 7, "howev": 7, "recent": 7, "innov": 7, "offer": 7, "breakthrough": 7, "By": 7, "freez": [7, 10], "onli": 7, "veri": 7, "small": [7, 10], "layer": 7, "less": 7, "than": 7, "total": 7, "prove": 7, "both": [7, 8], "friendli": 7, "effect": [7, 8], "declar": 7, "approach": 7, "machin": 7, "learn": [7, 8, 10], "provid": [7, 8, 13], "an": [7, 11, 12, 14, 15], "interfac": [7, 14, 15], "control": 7, "custom": [7, 8], "without": 7, "extens": 7, "Its": 7, "yaml": [7, 12], "base": [7, 8, 10], "empow": 7, "manag": [7, 8], "differ": [7, 8], "featur": 7, "output": [7, 8], "imagin": 7, "world": [7, 8], "where": 7, "pair": [7, 9], "context": 7, "magic": 7, "happen": 7, "act": 7, "guid": [7, 8], "steer": 7, "understand": [7, 8], "hand": 7, "And": 7, "advanc": 7, "come": 7, "plai": [7, 8], "toolkit": 7, "singl": 7, "memori": [7, 10], "contrain": 7, "gpu": [7, 11, 15], "includ": [7, 8], "lora": 7, "bit": 7, "quantiz": 7, "delv": 7, "deeper": 7, "nitti": 7, "gritti": 7, "uninstal": 7, "y": 7, "tensorflow": 7, "quiet": 7, "ipython": 7, "displai": 7, "html": 7, "set_css": 7, "style": 7, "white": 7, "space": 7, "wrap": 7, "get_ipython": 7, "event": 7, "regist": 7, "pre_run_cel": 7, "clear_cach": 7, "cuda": [7, 10], "is_avail": 7, "empty_cach": 7, "googl": [7, 10], "colab": [7, 10], "data_t": 7, "enable_dataframe_formatt": 7, "numpi": 7, "np": 7, "random": 7, "seed": 7, "123": 7, "panda": 7, "pd": 7, "df": 7, "to_panda": 7, "re": [7, 8], "go": [7, 12], "column": 7, "split": 7, "90": 7, "assign": 7, "valid": 7, "test": 7, "calcul": [7, 10], "number": [7, 10], "row": 7, "each": [7, 8], "total_row": 7, "len": 7, "split_0_count": 7, "split_1_count": 7, "05": 7, "split_2_count": 7, "arrai": 7, "count": 7, "split_valu": 7, "concaten": 7, "zero": 7, "ones": 7, "full": [7, 13], "shuffl": 7, "ensur": [7, 8, 10, 13], "add": [7, 10], "datafram": 7, "astyp": 7, "n_row": 7, "5000": 7, "head": 7, "alpaca": 7, "10": 7, "how": [7, 11, 12, 15], "look": 7, "meant": 7, "larg": 7, "produc": [7, 8], "natur": 7, "consist": [7, 9], "describ": [7, 10], "when": 7, "addit": 7, "requir": [7, 8, 11, 13], "expect": 7, "script": 7, "variou": 7, "statist": 7, "distribut": 7, "transform": [7, 10], "autotoken": [7, 10], "calculate_distribut": 7, "data_dict": 7, "kei": [7, 8], "item": 7, "averag": 7, "median": 7, "75th_percentil": 7, "percentil": 7, "75": 7, "90th_percentil": 7, "95th_percentil": 7, "95": 7, "99th_percentil": 7, "99": 7, "return": 7, "from_pretrain": [7, 10], "huggingfaceh4": 7, "zephyr": [7, 8], "beta": 7, "token_count": 7, "index": 7, "iterrow": 7, "instruction_col_token": 7, "input_col_token": 7, "output_col_token": 7, "append": 7, "token_distribut": 7, "upgrad": 7, "git": 7, "github": [7, 13], "com": 7, "peft": [7, 11], "getpass": 7, "local": [7, 10], "getpreferredencod": 7, "lambda": 7, "utf": 7, "8": [7, 9], "log": [7, 12], "api": [7, 11], "ludwigmodel": 7, "hugging_face_hub_token": 7, "hf_pqfaqdjhokftuzlfsxiqburbkzityjoru": 7, "assert": 7, "t4": 7, "16gib": 7, "vram": 7, "introduc": 7, "int4": 7, "int8": 7, "reduc": 7, "overhead": 7, "trainer": 7, "finetun": 7, "varieti": [7, 8], "epoch": 7, "rate": [7, 8], "qlora_fine_tuning_config": 7, "safe_load": 7, "reshard": 7, "sinc": 7, "doe": 7, "safetensor": 7, "support": 7, "base_model": 7, "input_featur": 7, "type": 7, "output_featur": 7, "below": [7, 10], "mai": 7, "write": [7, 10], "appropri": [7, 10, 13], "complet": [7, 10, 13], "request": [7, 10], "256": 7, "preprocess": 7, "global_max_sequence_length": 7, "probabl": 7, "val": 7, "batch_siz": 7, "eval_batch_s": 7, "gradient_accumulation_step": 7, "16": 7, "learning_r": 7, "0004": 7, "learning_rate_schedul": 7, "warmup_fract": 7, "03": 7, "logging_level": 7, "info": 7, "infer": 7, "abov": [7, 10], "make": [7, 10], "predict": 7, "some": 7, "exampl": [7, 10, 12, 14, 15], "whether": 7, "abil": 7, "iloc": 7, "shape": 7, "test_df": 7, "20": 7, "result_df": 7, "copi": [7, 12], "generated_output": 7, "output_respons": 7, "he": 7, "perfect": 7, "especi": 7, "limit": 7, "tweak": 7, "maximum": 7, "etc": 7, "alter": 7, "therebi": 7, "refin": 7, "explor": 8, "gpt": 8, "llama2": 8, "falcon": 8, "industri": 8, "particularli": 8, "decis": 8, "driven": 8, "dataset": 8, "encompass": 8, "wide": 8, "rang": 8, "scenario": 8, "emploi": 8, "span": 8, "manufactur": 8, "servic": 8, "emphasi": 8, "place": 8, "simul": 8, "challeng": 8, "expos": 8, "broad": 8, "spectrum": 8, "carefulli": 8, "align": 8, "cover": 8, "relat": 8, "dmaic": 8, "methodologi": 8, "voic": 8, "analysi": 8, "concept": 8, "reflect": 8, "core": 8, "vers": 8, "solut": 8, "root": 8, "lean": 8, "A": 8, "rigor": 8, "implement": 8, "relev": 8, "coher": 8, "against": 8, "real": 8, "guarante": 8, "actual": 8, "undergo": 8, "match": 8, "The": [8, 10, 13, 14, 15], "seamlessli": 8, "architectur": 8, "util": [8, 10], "iter": 8, "conduct": 8, "assess": 8, "knowledg": 8, "crucial": 8, "meaning": 8, "best": 8, "practic": 8, "emphas": 8, "defect": 8, "reduct": 8, "effici": [8, 10], "enhanc": [8, 10], "defin": [8, 10], "measur": 8, "analyz": 8, "continu": 8, "tailor": 8, "respond": 8, "standard": 8, "exposur": 8, "accordingli": 8, "satisfact": 8, "role": 8, "subsequ": 8, "showcas": 8, "healthcar": 8, "logist": 8, "suppli": 8, "assur": 8, "accuraci": 8, "gaug": 8, "techniqu": 8, "precis": 8, "recal": 8, "f1": 8, "score": 8, "quantifi": 8, "comprehens": 8, "With": 8, "deploi": 8, "them": [8, 10], "plant": 8, "monitor": 8, "identifi": 8, "drift": 8, "degrad": 8, "over": 8, "regular": 8, "ongo": 8, "maintain": 8, "period": 8, "revisit": 8, "remain": 8, "evolv": 8, "individu": 9, "organ": 9, "four": 9, "thei": 9, "oper": 9, "under": 9, "guidanc": 9, "tawfik": 9, "masrour": 9, "group": 9, "member": 9, "fatima": 9, "zahra": 9, "hannou": 9, "achraf": 9, "jaanin": 9, "saddik": 9, "imad": 9, "drissi": 9, "el": 9, "bouzaidi": 9, "karim": 9, "bilal": 9, "manja": 9, "hafsa": 9, "ihrouchen": 9, "4": [9, 10, 14, 15], "badreddin": 9, "hannaoui": 9, "elghali": 9, "blouz": 9, "capabl": 10, "previous": 10, "push": [10, 11, 15], "exist": 10, "achiev": 10, "integr": [10, 14, 15], "befor": [10, 13], "proceed": [10, 13], "sure": 10, "termin": 10, "code": 10, "cell": 10, "prefer": 10, "e": [10, 13], "g": [10, 13], "jupyt": 10, "notebook": 10, "run": [10, 12, 13, 14, 15], "bitsandbyt": 10, "acceler": 10, "alreadi": [10, 12], "proce": 10, "stage": 10, "execut": 10, "bnb": 10, "loraconfig": 10, "peftconfig": 10, "peftmodel": 10, "get_peft_model": 10, "prepare_model_for_kbit_train": 10, "autoconfig": 10, "automodelforcausallm": 10, "bitsandbytesconfig": 10, "model_nam": 10, "alexsherstinski": 10, "shard": 10, "ani": 10, "bnb_config": 10, "load_in_4bit": 10, "bnb_4bit_use_double_qu": 10, "bnb_4bit_quant_typ": 10, "nf4": 10, "bnb_4bit_compute_dtyp": 10, "bfloat16": 10, "device_map": 10, "auto": 10, "trust_remote_cod": 10, "quantization_config": 10, "pad_token": 10, "eos_token": 10, "given": 10, "sum": 10, "sequenc": 10, "integ": [10, 12], "f": 10, "encod": 10, "return_tensor": 10, "pt": 10, "add_special_token": 10, "model_input": 10, "fine": [10, 12, 14, 15], "tune": [10, 12, 14, 15], "pretrain": 10, "dure": 10, "trainabl": 10, "directori": 10, "adapter_config": 10, "json": [10, 12], "shown": 10, "imag": 10, "Then": [10, 12], "peft_model_id": 10, "fatimazahra25": 10, "zephyr_beta": 10, "load_adapt": 10, "ve": 10, "ad": 10, "modul": 10, "enable_adapt": 10, "generated_id": 10, "1000": 10, "do_sampl": 10, "decod": 10, "batch_decod": 10, "print": 10, "disable_adapt": 10, "current": 10, "ludwig": 11, "attach": [11, 15], "packag": 11, "show": 12, "easili": 12, "own": 12, "project": [12, 13], "assum": 12, "went": 12, "account": 12, "done": 12, "back": 12, "first": 12, "llm": [12, 13, 14, 15], "At": 12, "end": 12, "folder": 12, "what": 12, "api_experiment_run_x": 12, "x": 12, "pytorch_model": 12, "special_tokens_map": 12, "tokenizer_config": 12, "training_arg": 12, "vocab": 12, "training_result": 12, "llm_adapt": 12, "pytorch_adapt": 12, "upload": 12, "hf_hub": 12, "repo_id": 12, "profil": 12, "repo_nam": 12, "model_path": 12, "api_experiment_run": 12, "abl": 12, "page": 12, "click": 12, "button": 12, "past": 12, "consol": 12, "azulian": 12, "doctorllm2": 12, "up": 13, "gia": 13, "7": [13, 14, 15], "higher": 13, "virtualenv": 13, "clone": 13, "databas": 13, "migrat": 13, "develop": 13, "server": 13, "certain": 13, "locat": 13, "web": 13, "browser": 13, "doc": 13, "six": [14, 15], "sigma": [14, 15], "domain": [14, 15], "6": [14, 15], "qualiti": [14, 15], "metric": [14, 15], "evalu": [14, 15], "recommend": [14, 15], "chainlit": [14, 15], "easi": [14, 15], "wai": [14, 15], "interact": [14, 15], "prerequisit": [14, 15], "download": [14, 15], "usag": 14, "team": 15, "synthet": 15, "data": 15}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"custom": 0, "fine": [1, 3, 7, 8], "tune": [1, 3, 7, 8], "us": [1, 7], "hug": 1, "face": 1, "librari": 1, "how": [2, 3, 10], "load": [2, 3, 10], "an": [2, 3, 4, 6, 10], "adapt": [2, 3, 10, 12], "attach": [2, 10], "model": [2, 4, 6, 10, 11], "data": [3, 8, 14], "base": [3, 4], "sampl": 3, "synthet": [3, 8, 14], "gener": [3, 7, 8], "gpt": 3, "4": [3, 7, 8, 13], "huggingfac": [4, 7, 12], "interact": [4, 6], "goal": [4, 5], "hf": [4, 5], "option": [4, 5], "section": 4, "thi": 4, "i": 4, "introduct": 5, "chainlit": 6, "easi": 6, "wai": 6, "llm": [6, 7, 8], "prerequisit": [6, 13], "download": 6, "The": [6, 7, 9], "interfac": 6, "run": 6, "ludwig": [7, 12], "1": [7, 8, 10, 13], "tradit": 7, "v": 7, "paramet": 7, "effici": 7, "instal": [7, 10, 13], "": [7, 15], "relat": 7, "depend": 7, "2": [7, 8, 10, 13], "import": 7, "code": 7, "dataset": 7, "3": [7, 8, 10, 13], "setup": [7, 13], "your": 7, "token": 7, "process": 8, "divers": 8, "consider": 8, "instruct": 8, "craft": 8, "incorpor": 8, "six": 8, "sigma": 8, "principl": 8, "qualiti": 8, "control": 8, "integr": 8, "input": 8, "format": 8, "valid": 8, "domain": 8, "5": 8, "exampl": 8, "6": 8, "metric": 8, "evalu": 8, "7": 8, "next": 8, "step": 8, "recommend": 8, "team": 9, "gpu": 10, "requir": 10, "packag": 10, "configur": [10, 13], "peft": 10, "enabl": 10, "disabl": 10, "push": 12, "api": 12, "usag": 13, "welcom": 15, "chat2ia": 15, "document": 15, "tabl": 15, "content": 15}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 60}, "alltitles": {"Customization": [[0, "customization"]], "Fine-tuning using hugging face libraries": [[1, "fine-tuning-using-hugging-face-libraries"]], "How to load an adapter and attach it to the model": [[2, "how-to-load-an-adapter-and-attach-it-to-the-model"]], "How to load data based on an adapter fine-tuned on a sample of synthetic data generated by GPT-4": [[3, "how-to-load-data-based-on-an-adapter-fine-tuned-on-a-sample-of-synthetic-data-generated-by-gpt-4"]], "HuggingFace base model interaction": [[4, "huggingface-base-model-interaction"]], "Goals": [[4, "goals"], [5, "goals"]], "HF": [[4, "hf"], [5, "hf"]], "Optional Section": [[4, "optional-section"]], "This is an optional section.": [[4, "this-is-an-optional-section"], [4, "id1"]], "Introduction": [[5, "introduction"]], "Optional": [[5, "optional"]], "Chainlit: an easy way to interact with LLMs": [[6, "chainlit-an-easy-way-to-interact-with-llms"]], "Prerequisites": [[6, "prerequisites"]], "Downloading the model": [[6, "downloading-the-model"]], "The interface": [[6, "the-interface"]], "Running the interface": [[6, "running-the-interface"]], "Fine-tuning using Ludwig": [[7, "fine-tuning-using-ludwig"]], "1. Traditional Fine Tuning Vs. Parameter Efficient Fine-Tuning": [[7, "traditional-fine-tuning-vs-parameter-efficient-fine-tuning"]], "1. Fine-tuning using Ludwig": [[7, "id1"]], "1.1 Install Ludwig and Ludwig\u2019s LLM related dependencies": [[7, "install-ludwig-and-ludwig-s-llm-related-dependencies"]], "1.2. Import The Code Generation Dataset": [[7, "import-the-code-generation-dataset"]], "1.3. Setup Your HuggingFace Token \ud83e\udd17": [[7, "setup-your-huggingface-token"]], "1.4. Fine-tuning": [[7, "fine-tuning"]], "Data Generation for LLM Fine-tuning with Synthetic Data": [[8, "data-generation-for-llm-fine-tuning-with-synthetic-data"]], "3.1 Synthetic Data Generation Process": [[8, "synthetic-data-generation-process"]], "Diversity Considerations": [[8, "diversity-considerations"]], "Instruction Crafting": [[8, "instruction-crafting"]], "Incorporating Six Sigma Principles": [[8, "incorporating-six-sigma-principles"]], "Quality Control": [[8, "quality-control"]], "3.2 Data Integration with LLMs": [[8, "data-integration-with-llms"]], "Data Input Format": [[8, "data-input-format"]], "Fine-tuning Process": [[8, "fine-tuning-process"]], "Validation": [[8, "validation"]], "4. Six Sigma Domain Integration": [[8, "six-sigma-domain-integration"]], "5. Examples": [[8, "examples"]], "6. Quality Metrics and Evaluation": [[8, "quality-metrics-and-evaluation"]], "7. Next Steps and Recommendations": [[8, "next-steps-and-recommendations"]], "The team": [[9, "the-team"]], "How to load an adapter and attach it to the model (GPU)": [[10, "how-to-load-an-adapter-and-attach-it-to-the-model-gpu"]], "1. Install Required Packages": [[10, "install-required-packages"]], "2. Load and Configure the Model": [[10, "load-and-configure-the-model"]], "3. Load adapters with \ud83e\udd17 PEFT": [[10, "load-adapters-with-peft"]], "Enable and Disable the Adapter": [[10, "enable-and-disable-the-adapter"]], "Model": [[11, "model"]], "Pushing the adapter into HuggingFace": [[12, "pushing-the-adapter-into-huggingface"]], "Ludwig API": [[12, "ludwig-api"]], "Setup": [[13, "setup"]], "1. Prerequisites": [[13, "prerequisites"]], "2. Installation": [[13, "installation"]], "3. Configuration": [[13, "configuration"]], "4. Usage": [[13, "usage"]], "Synthetic Data": [[14, "synthetic-data"]], "Welcome to Chat2IA\u2019s documentation!": [[15, "welcome-to-chat2ia-s-documentation"]], "Table of Content:": [[15, null]]}, "indexentries": {}})